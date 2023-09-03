import LoginPage from '../pageObject/sl_LoginPage'
import ProductPage from '../pageObject/productPage'
import CheckoutPage from '../pageObject/checkoutPage'


describe('Mator Sauce Task', () => {

    before(async () => {

        await LoginPage.LoginComponent.open()

    });

    //SCENARIO 1
    it('Login with the LockedOut user and verify error message', async () => {

        await LoginPage.login('locked_out_user', 'secret_sauce')
        await expect(await LoginPage.errorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.')

    });
    it('Login with the standard_user and verify Login', async () => {

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(await LoginPage.verifyTitle).toHaveText('PRODUCTS')
        await browser.back();

    });
    it('Login with the problem_user and verify Login', async () => {

        await LoginPage.login('problem_user', 'secret_sauce')
        await expect(await LoginPage.verifyTitle).toHaveText('PRODUCTS')
        await browser.back();

    });
    it('Login with the performance_glitch_user and verify Login', async () => {

        await LoginPage.login('performance_glitch_user', 'secret_sauce')
        await expect(await LoginPage.verifyTitle).toHaveText('PRODUCTS')
        await browser.back();

    });

    //SCENARIO 2
    it('verify that user can Login with standard_user', async () => {

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(await LoginPage.verifyTitle).toHaveText('PRODUCTS')

    });
    it('Verify the number of items on the page', async () => {

        await expect(await ProductPage.productList).toHaveLength(6)

    });
    it('Verify that the user can select the low-high filter and that it works correctly', async () => {
        const ItemPrice = await ProductPage.productPrice
        //arrange the items in ascending order
        ItemPrice.sort()
        //select the first price after running .sort()
        await ProductPage.firstPriceSort()
        //select the last price after running .sort()
        await ProductPage.lastPriceSort()
        //select the low-high filter
        await ProductPage.lohiFilter()
        //verify the filter is functional
        //select the first price and convert it to Float
        await ProductPage.afterFilterFirst()
        //select the last price and convert it to Float
        await ProductPage.afterFilterLast()
        //verify that the first price after sorting is same with the first price after filter
        await expect(await ProductPage.afterFilterFirst()).toEqual(await ProductPage.firstPriceSort())
        //verify that the last price after sorting is same with the last price after filter
        await expect(await ProductPage.afterFilterLast()).toEqual(await ProductPage.lastPriceSort())

    });
    //SCENARIO 3
    it('Add 3 items to the basket', async () => {
        //select 3 items
        await CheckoutPage.pickItem()

    });
    it('Verify items were added successfully', async () => {
        //verify the amount of items selected
        await expect(await CheckoutPage.basketAmt).toHaveText('3')

    });
    it('Remove and item and verify the item has been removed', async () => {
        await CheckoutPage.cartIcon.click()
        await CheckoutPage.removeItem.click()
        await expect(await CheckoutPage.basketAmt).toHaveText('2')
        await expect(await CheckoutPage.removeItem).not.toExist()

    });

});