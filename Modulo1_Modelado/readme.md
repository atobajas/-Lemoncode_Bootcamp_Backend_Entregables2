# Laboratorio Modulo 1 - Modelado

## Descripción

Debemos modelar la base de datos de un portal de elerning.

```md
![Web que tomo como ejemplo](https://www.lemoncode.tv/)
```

La web tendrá cursos: Inicalmente 10, se espera que se alcancen 100 en un año y máximo 1000 en cinco años, sería bueno estar preparado para ello.

Un curso puede tener 1 o más autores.

Cada curso se compone de una o más lecciones. Entre 1 y 20.

Una lección contiene un video y un artículo escrito. Estos están alojado externamente y la bd almacenará las urls a ambos.

Una lección sólo tiene un autor.

Los cursos se agrupan por temática. Inicialmente 4, Front End, Devops, Backend, Otros (se podría ampliar, Desarrollo Móvil, IA, Blockchain...).

## Workload

La página home se va a visualizar a menudo.

La página en la que se muestra el detalle de un curso se va a visualizar a menudo.

La página en la que se va a visualizar un video de un curso se va a visualizar a menudo.

La página de autor se espera que no se consuma tan a menudo.

En lecturas de la bd se espera

## Explicaciones modelo

Como el número de lecciones y el tamaño no es grande y las páginas que los van a mostrar se utilizarán muy a menudo
las anido dentro de la colección de cursos. (aplico patrón extended ref).

Dado que la información del autor se utilizará poco creo colección propia y enlazo desde fuera. (patrón subset)

En colección temática creo campo ultimoscursos que será una matriz en la que se reflejarán los cinco últimos cursos.
En este campo añado la información necesaria del curso para mostrar en página home y mejorar el Working Set. (patrón extended ref)
Se tendrá que gestionar desde programación el contenido de este campo.

## Requerimientos básicos.

Queremos mostrar los últimos cursos publicados.

Queremos mostrar cursos por área (devops / front End ...).

Queremos mostrar un curso con sus videos.

En un video queremos mostrar su autor.
