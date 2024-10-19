export const uniqueSelectValidationRule = (Rule: any) =>
    Rule.custom((categories: any) => {
        const uniqueCategories = new Set(categories.map((cat: any) => cat._ref));
        if (categories.length !== uniqueCategories.size) {
            return 'cannot have duplicate categories';
        }
        return true;
    });