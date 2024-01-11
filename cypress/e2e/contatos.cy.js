describe('Testes da Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/');
        cy.wait(2000);
    });

    it('Deve adicionar um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('João Victor');
        cy.get('input[placeholder="E-mail"]').type('jvictorragazzi@gmail.com');
        cy.get('input[placeholder="Telefone"]').type('3112345678');
        cy.get('.adicionar').click();
    });

    it('Deve alterar um contato existente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('input[placeholder="Nome"]').clear().type('Nome Alterado');
        cy.get('input[placeholder="Telefone"]').clear().type('987654321');
        cy.get('.alterar').click();
    });    

    it('Deve remover um contato existente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
    });
});