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
    await driver.findElement(By.id('inputTask')).sendKeys("Lavar a Louça", Key.RETURN)
    await driver.findElement(By.id('inputTask')).sendKeys("Ler um Livro", Key.RETURN)
    await driver.findElement(By.id('inputTask')).sendKeys("Ir ao mercado", Key.RETURN)
    await driver.findElement(By.id('inputTask')).sendKeys("Lavar o carro", Key.RETURN)

    // Assertion 01
    let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]")).getText()
    .then(function(value){
        return value 
    });
    seleniumText.should.equal('Aprender Selenium')

    // Assertion 02
    let lavarLouca = await driver.findElement(By.xpath("/html/body/div/section/ul/li[2]")).getText()
    .then(function(value){
        return value 
    });
    lavarLouca.should.equal('Lavar a Louça')

    // Assertion 03
    let lerLivro = await driver.findElement(By.xpath("/html/body/div/section/ul/li[3]")).getText()
    .then(function(value){
        return value 
    });
    lerLivro.should.equal('Ler um Livro')

    // Assertion 04
    let irMercado = await driver.findElement(By.xpath("/html/body/div/section/ul/li[4]")).getText()
    .then(function(value){
        return value 
    });
    irMercado.should.equal('Ir ao mercado')

    // Assertion 05
    let lavarCarro = await driver.findElement(By.xpath("/html/body/div/section/ul/li[5]")).getText()
    .then(function(value){
        return value 
    });
    lavarCarro.should.equal('Lavar o carro')

    // Fechar navegador
    await driver.quit()

    })
})



