import { ObjectId } from "mongodb";
import mongoose, { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;
    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(studentSearchableFildes: string[]) {
        const searchTerm = this?.query?.searchTerm;
        // console.log(searchTerm, "search term")
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: studentSearchableFildes.map(
                    (field) =>
                    ({
                        [field]: { $regex: searchTerm, $options: "i" }
                    } as FilterQuery<T>)
                ),
            })
        }
        return this; // for chaining (must return it)
    };

    filter() {
        const copyQuery = { ...this.query };
        console.log(copyQuery, "filter");
        const excludeFields = ["searchTerm", "order", "priceRange", "limit"];
        excludeFields.forEach(el => delete copyQuery[el]);
        // console.log({...this.query });
        this.modelQuery = this.modelQuery.find(copyQuery as FilterQuery<T>)
        return this;
    }

    sort() {
        let sort = (this?.query?.sort as string) || "asc";
        this.modelQuery = this.modelQuery.sort({ price: sort as "desc" | "asc" });
        return this;
    }

    priceRange() {
        const priceRangeStr = this?.query?.priceRange as string;
        if (priceRangeStr) {
            const priceRange: number[] = priceRangeStr.split(',').map(Number);

            if (priceRange.length === 2 && !isNaN(priceRange[0]) && !isNaN(priceRange[1])) {
                const [minPrice, maxPrice] = priceRange;
                this.modelQuery = this.modelQuery.find({
                    price: { $gte: minPrice, $lte: maxPrice }
                });
            }
        }

        return this; // for chaining
    }

    filterByCategories() {
        // todo: doesnot work it
        const selectedCategoriesStr = this?.query?.selectedCategories as string;
        if (selectedCategoriesStr) {
            const selectedCategories: mongoose.Types.ObjectId[] = selectedCategoriesStr.split(',').map(cat => new mongoose.Types.ObjectId(cat.trim()));

            if (selectedCategories.length > 0) {
                this.modelQuery = this.modelQuery.find({
                    categoryId: { $in: selectedCategories }
                });
            }
        }
        return this;
    }

    limit() {
        let limit = (this?.query?.limit as number);
        this.modelQuery = this.modelQuery.limit(limit);
        return this;
    }


    fields() {
        const fields = (this?.query?.fields as string)?.split(",")?.join(" ") || "-__v";
        this.modelQuery = this.modelQuery.select(fields);
        return this;
    }

}

export default QueryBuilder;