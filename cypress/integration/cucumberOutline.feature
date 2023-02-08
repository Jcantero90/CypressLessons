Feature: Demo de cucumber.

    Esto es una descripcion

    Scenario Outline: Nombre del escenario
        Given Primer paso de la prueba
        When Segundo paso de la prueba <example>
        When Tercer paso de la prueba
        And Concatenacion por si lo necesitamos <example2>
        Then finalizacion de la prueba

    Examples: 
        | example | example2 |
        | EjemploNombre | 123456789 |
        | EjemploNombre1 | 123456789 |
        | EjemploNombre2 | 123456789 |
        | EjemploNombre3 | 123456789 |
        | EjemploNombre4 | 123456789 |
        | EjemploNombre5 | 123456789 |
        | EjemploNombre6 | 123456789 |
        | EjemploNombre7 | 123456789 |
        | EjemploNombre8 | 123456789 |
        | nombreDiferente | 22 |
        
      


