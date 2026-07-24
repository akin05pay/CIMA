export type AllocationBucket =
  | "akin_services"
  | "cima_operations"
  | "endowment_contribution";

export type AllocationRule = {
  bucket: AllocationBucket;
  basisPoints: number;
};

export type AllocationResult = {
  bucket: AllocationBucket;
  amount: number;
};

export function validateAllocationPolicy(rules: AllocationRule[]): void {
  const totalBasisPoints = rules.reduce(
    (total, rule) => total + rule.basisPoints,
    0
  );

  if (totalBasisPoints !== 10_000) {
    throw new Error("Allocation policy must total exactly 10,000 basis points.");
  }

  if (rules.some((rule) => !Number.isInteger(rule.basisPoints) || rule.basisPoints < 0)) {
    throw new Error("Allocation basis points must be non-negative integers.");
  }
}

export function allocateMinorUnits(
  amount: number,
  rules: AllocationRule[]
): AllocationResult[] {
  if (!Number.isInteger(amount) || amount < 0) {
    throw new Error("Amount must be a non-negative integer in minor currency units.");
  }

  validateAllocationPolicy(rules);

  let allocated = 0;

  return rules.map((rule, index) => {
    const isLastRule = index === rules.length - 1;
    const bucketAmount = isLastRule
      ? amount - allocated
      : Math.floor((amount * rule.basisPoints) / 10_000);

    allocated += bucketAmount;

    return {
      bucket: rule.bucket,
      amount: bucketAmount
    };
  });
}
