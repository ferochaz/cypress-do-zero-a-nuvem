describe ( 'acessa a pagina',()=>{
beforeEach(()=>{

  cy.visit('./src/index.html')
})

describe('central de atendimento ao cliente ',() =>{


  it('verifica o titulo da pagina',( )=>{

    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')

  })

})

it( 'preenche campos e envia o formulario',()=>{

  cy.get('#firstName').type(  ' felipe ')
  cy.get('#lastName').type(  ' rocha ')
  cy.get('#email').type(  ' dedeto@gmail.com ')
  cy.get('#phone').type(  ' 11958963333')
  cy.get('#product').type(  ' carro')
  cy.get('#open-text-area').type(  'teste da caixa de texto pra ver se o delay do cypress funciona meeesmo de forma correta e pausada e legal',{delay:50})
  cy.get('.button[type=submit]').click()


 cy.get('.success').should('be.visible')
} )

  it( 'exibe msg de erro email invalido' ,()=>{

    cy.get('#firstName').type(  ' felipe ')
    cy.get('#lastName').type(  ' rocha ')
    cy.get('#email').type(  ' dedetogmail.com ')
    cy.get('#phone').type(  ' 11958963333')
    cy.get('#product').type(  ' carro')
    cy.get('#open-text-area').type(  'teste da caixa de texto pra ver se o delay do cypress funciona meeesmo de forma correta e pausada e legal',{delay:50})
    cy.get('.button[type=submit]').click()
  
    cy.get('.error').should('be.visible')

  })


  it( 'digitando telefone invalido' ,()=>{

    cy.get('#firstName').type(  ' felipe ')
    cy.get('#lastName').type(  ' rocha ')
    cy.get('#email').type(  ' dedeto@gmail.com ')
    cy.get('#phone').type(  ' abcdge').should('have.value','')
    cy.get('#product').type(  ' carro')
    cy.get('#open-text-area').type(  'teste da caixa de texto pra ver se o delay do cypress funciona meeesmo de forma correta e pausada e legal',{delay:50})
    cy.get('.button[type=submit]').click()

  })

  it('telefone so preenchido depois do envio do formulario' ,()=>{

    cy.get('#firstName').type(  ' felipe ') 
    cy.get('#lastName').type(  ' rocha ')
    cy.get('#email').type(  ' dedeto@gmail.com ')
    cy.get('#product').type(  ' carro')
    cy.get('#open-text-area').type(  'teste da caixa de texto pra ver se o delay do cypress funciona meeesmo de forma correta e pausada e legal',{delay:50})
    cy.get('#phone-checkbox').click()
    cy.get('.button[type=submit]').click()
    cy.get('.error').should('be.visible')
  })


  it ( 'comando clear' ,()=>{

    cy.get('#firstName').type(  'felipe').should('have.value', 'felipe')
    cy.get('#lastName').type(  'rocha').should('have.value', 'rocha')
    cy.get('#email').type(  'dedeto@gmail.com').should('have.value', 'dedeto@gmail.com')
    cy.get('#open-text-area').type(  'teste',{delay:50}).should('have.value', 'teste')
    cy.get('#phone-checkbox').click()

    cy.get('#firstName').clear().should('have.value', '')
    cy.get('#lastName').clear().should('have.value', '')
    cy.get('#email').clear().should('have.value', '')
    cy.get('#open-text-area').clear().should('have.value', '')
  
    
  })

  it('seleciona campo lista suspensa',()=>{


cy.get('#firstName').type(  'felipe').should('have.value', 'felipe')
    cy.get('#lastName').type(  'rocha').should('have.value', 'rocha')
    cy.get('#email').type(  'dedeto@gmail.com').should('have.value', 'dedeto@gmail.com')
    cy.get('#phone').type(  '11955552222').should('have.value','11955552222')
    cy.get('#open-text-area').type(  'teste',{delay:50}).should('have.value', 'teste')
    cy.get('#phone-checkbox').click()
    cy.get('#product').select('youtube')
    cy.get('.button[type=submit]').click()

      cy.get('.success').should('be.visible')
  })


  it('marca o radio ',()=>{

    cy.get('#firstName').type(  'felipe').should('have.value', 'felipe')
    cy.get('#lastName').type(  'rocha').should('have.value', 'rocha')
    cy.get('#email').type(  'dedeto@gmail.com').should('have.value', 'dedeto@gmail.com')
    cy.get('#phone').type(  '11955552222').should('have.value','11955552222')
    cy.get('#open-text-area').type(  'teste',{delay:50}).should('have.value', 'teste')
    cy.get('#phone-checkbox').click()
    cy.get('#product').select('youtube')
    cy.get(':nth-child(4) > input').check()
    cy.get('.button[type=submit]').click()

      cy.get('.success').should('be.visible')


  })



  it('desmarca checkbox ',()=>{

    cy.get('#firstName').type(  'felipe').should('have.value', 'felipe')
    cy.get('#lastName').type(  'rocha').should('have.value', 'rocha')
    cy.get('#email').type(  'dedeto@gmail.com').should('have.value', 'dedeto@gmail.com')
    cy.get('#phone').type(  '11955552222').should('have.value','11955552222')
    cy.get('#open-text-area').type(  'teste',{delay:50}).should('have.value', 'teste')
    cy.get('#phone-checkbox').click()
    cy.get('#phone-checkbox').uncheck()
    cy.get('#product').select('youtube')
    cy.get(':nth-child(4) > input').check()
    cy.get('.button[type=submit]').click()

      cy.get('.success').should('be.visible')


  })


  it('desmarca so ultimo checkbox ',()=>{

    cy.get('#firstName').type(  'felipe').should('have.value', 'felipe')
    cy.get('#lastName').type(  'rocha').should('have.value', 'rocha')
    cy.get('#email').type(  'dedeto@gmail.com').should('have.value', 'dedeto@gmail.com')
    cy.get('#phone').type(  '11955552222').should('have.value','11955552222')
    cy.get('#open-text-area').type(  'teste',{delay:50}).should('have.value', 'teste')
    cy.get('input[type=checkbox]').check().should('be.checked').last().uncheck().should('not.be.checked')
    cy.get('#product').select('youtube')
    cy.get(':nth-child(4) > input').check()
    cy.get('.button[type=submit]').click()

      cy.get('.success').should('be.visible')


  })


  it('fazendo o upload de arquivos  ',()=>{


    cy.get('#file-upload')
   .selectFile('cypress/fixtures/example.json')
   . should(input=>{

      expect(input[0].files[0].name).to.equal('example.json' )
   })
   cy.get('.button[type=submit]').click()
  })


  
  it.only('links  ',()=>{

    cy.contains ('a','Política de Privacidade').should('have.attr','href','privacy.html').and('have.attr','target','_blank')

  })

})