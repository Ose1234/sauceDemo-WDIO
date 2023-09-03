class CheckoutPage
{
    get firstProduct()
    {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get secondProduct()
    {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }

    get thirdProduct()
    {
        return $('#add-to-cart-sauce-labs-fleece-jacket')
    }

    get basketAmt()
    {
        return $('.shopping_cart_badge')
    }

    get cartIcon()
    {
        return $('.shopping_cart_link')
    }

    get removeItem()
    {
        return $('#remove-sauce-labs-bolt-t-shirt')
    }
    async pickItem()
    {
        await this.secondProduct.click()
        await this.firstProduct.click()
        await this.thirdProduct.click()
    }

}

export default new CheckoutPage