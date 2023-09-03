import LoginComponent from "./components/sl_LoginComponent"

class LoginPage 
{

    get LoginComponent()
    {
        return LoginComponent
    }
    
    get verifyTitle()
    {
        return $('.title')
    }

    get errorMsg()
    {
        return $('h3[data-test*="error"]')
    }

    async login(username, password)
    {
        await LoginComponent.userName.setValue(username)
        await (await LoginComponent.passWord).setValue(password)
        await (await LoginComponent.loginBtn).click()

    }

    async logout()
    {
        await $('#react-burger-menu-btn').click()
        await $('#logout_sidebar_link').click()
    }

}

export default new LoginPage