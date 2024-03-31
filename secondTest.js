import {Builder, By, Key} from "selenium-webdriver"
import {should} from "chai"
should();

// Bloco "Describe"
describe("Funcionalidade - Adicionar Tarefa", function(){
    // Bloco IT - Individual Tests
    it("TC01 - Criar uma tarefa", async function(){
            // Abrir o navegador
    let driver = await new Builder().forBrowser("MicrosoftEdge").build();

    // Navegar até o site
    await driver.get('https://herziopinto.github.io/lista-de-tarefas/')

    // Adicionar a tarefa - encontrar o elemento, digitar o texto, apertar o Enter
    await driver.findElement(By.id('inputTask')).sendKeys("Aprender Selenium", Key.RETURN)
    
    // Assertion 01
    let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]")).getText()
    .then(function(value){
        return value 
    });
    seleniumText.should.equal('Aprender Selenium')

    // Fechar navegador
    await driver.quit()

    })
})




