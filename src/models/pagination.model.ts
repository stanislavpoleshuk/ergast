export class PagePaginationModel {
    limit: number;
    offset: number;
    page: number;

    constructor(limit: number, offset: number, page: number) {
        this.limit = limit;
        this.offset = offset;
        this.page = page
    }
}

export class PaginationModel {
    currentPage: number;
    totalItems: number;
    itemsPerPage: number;

    constructor(currentPage: number = 1, totalItems: number = 0,  itemsPerPage: number = 10) {
        this.currentPage = currentPage;
        this.itemsPerPage = itemsPerPage;
        this.totalItems = totalItems;
    }

    protected get numPages(): number {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }

    public pageParams(page: number): PagePaginationModel {
        const limit = this.itemsPerPage;
        const offset = page * limit - limit;
        return new PagePaginationModel(limit, offset, page);
    }

    public get current(): PagePaginationModel {
        return this.pageParams(this.currentPage);
    }

    public get prevEnabled(): boolean {
        return this.currentPage > 1;
    }

    public get prevParams(): PagePaginationModel {
        if (this.prevEnabled) {
            this.currentPage--;
        }
        return this.pageParams(this.currentPage);
    }

    public get nextEnabled(): boolean {
        return this.currentPage < this.numPages;
    }

    public get nextParams(): PagePaginationModel {
        if (this.nextEnabled) {

            this.currentPage++;
        }
        return this.pageParams(this.currentPage);
    }
}