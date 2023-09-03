class ProductPage {
    get productList() {
        return $$('.inventory_list>div.inventory_item')
    }

    get productPrice() {
        return $$('div> .inventory_item_description > .pricebar > .inventory_item_price')
    }

    get FirstproductPrice() {
        return $$('div:nth-child(1)> .inventory_item_description > .pricebar > .inventory_item_price')
    }

    get LastproductPrice() {
        return $$('div:nth-child(6)> .inventory_item_description > .pricebar > .inventory_item_price')
    }

    get dropDown() {
        return $('.product_sort_container')
    }

    async lohiFilter() {
        await this.dropDown.selectByAttribute('value', 'lohi')
    }

    async afterFilterFirst() {
        const FilteredfirstPrice = await this.FirstproductPrice
        const FilteredfirstpriceMap = FilteredfirstPrice.map(e => e.getText())
        const FilteredfirstPriceString = FilteredfirstpriceMap.join("").replace("$", "")
        const FilteredfirstPriceFloat = parseFloat(FilteredfirstPriceString)
    }

    async afterFilterLast() {
        const FilteredlastPrice = await this.LastproductPrice
        const FilteredlastPriceMap = FilteredlastPrice.map(e => e.getText())
        const FilteredlastPriceString = FilteredlastPriceMap.join("").replace("$", "")
        const FilteredlastPriceFloat = parseFloat(FilteredlastPriceString)
    }

    async firstPriceSort() {
        const firstPrice = await this.FirstproductPrice
        const firstPriceMap = firstPrice.map(e => e.getText())
        const firstPriceString = firstPriceMap.join("").replace("$", "")
        const firstPriceFloat = parseFloat(firstPriceString)
    }

    async lastPriceSort() {
        const lastPrice = await this.LastproductPrice
        const lastPriceMap = lastPrice.map(e => e.getText())
        const lastPriceString = lastPriceMap.join("").replace("$", "")
        const lastPriceFloat = parseFloat(lastPriceString)
    }

}

export default new ProductPage