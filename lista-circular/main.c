#include <stdio.h>
#include <stdlib.h>

struct no
{
    int info;
    struct no *prox;
};

typedef struct no *noPtr;
noPtr inicio;
noPtr fim;

//Escopo das funções
void insere();
void retira();
void listar();
void buscar();
int listaVazia();

int main()
{
    int op;
    inicio = NULL;

    do
    {
        printf("\n----------------------------------------------------------------------------");
        printf("\n1: Insere elemento na lista");
        printf("\n2: Retira elemento da lista");
        printf("\n3: Listar elementos");
        printf("\n4: Buscar elemento");
        printf("\n0: Sair");
        printf("\n\nDigite a opcao (0 - 4): ");
        scanf("%d", &op);

        switch (op)
        {
            case 1: insere(); break;
            case 2: retira(); break;
            case 3: listar(); break;
            case 4: buscar(); break;
        }
    } while (op != 0);

    return 0;
}

void insere ()
{
    noPtr p = (noPtr) malloc(sizeof(struct no));
    int x;

    printf("\nDigite o valor do elemento: ");
    scanf("%d", &x);
    p -> info = x;

    if(listaVazia() == 0){
        inicio = p;
        fim = p;
        p -> prox = inicio;
    }
    else{
        p -> prox = inicio;
        inicio = p;
        fim -> prox = inicio;
    }
}

int listaVazia ()
{
    if (inicio == NULL)
        return 0;
    else
        return 1;
}

void retira ()
{
    noPtr p;

    if (listaVazia()!=0)
    {
        p = inicio;
        if(inicio == fim)
            inicio = fim = NULL;
        else{
            inicio = p -> prox; // inicio = inicio -> prox;
            fim -> prox = inicio;
        }
        free(p);
        printf("\nO elemento foi retirado!\n");
    }
    else
        printf("\nLista Vazia!");
}

void listar()
{
    noPtr p;
    p = inicio;

    if (listaVazia()!=0)
    {
        printf("\nOs elementos da lista sao: \n");
        while (p -> prox != inicio)
        {
            printf("%d\n", p->info);
            p = p -> prox;
        }
        printf("%d", fim -> info);
    }
    else
        printf("\nLista Vazia!");
}

void buscar()
{
    noPtr p;
    p = inicio;

    if (listaVazia()!=0)
    {
        int x;

        printf("\nQual elemento esta procurando? ");
        scanf("%d", &x);

        while (p != fim && p -> info != x){
            p = p -> prox;
        }

        if (p-> info == x)
            printf("Valor %d encontrado!", p -> info);
        else
            printf("%d nao encontrado!", x);
    }
    else
        printf("\nLista Vazia!");
}
