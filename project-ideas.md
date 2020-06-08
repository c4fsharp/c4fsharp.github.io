---
title: Project Ideas
layout: default
order: 5
---

# {{ page.title }}

This is a curated list of F# project ideas including:

* "nice-to-have" projects for groups and individuals to take up as part of a curriculum or independent learning
* ways to contribute to the F# open source community.

It is a great inspiration for students to work on a real-world projects, contributing to an open-source community.

Please add project ideas using the following format:

    ### Example Project Name
    
    Description of project
    
    **Contact**: name (title, email | phone)
    **Tags**: comma, delimited, list, of, tags

Please submit your project ideas via [Github pull request](https://github.com/c4fsharp/c4fsharp.github.io/pulls).

## Project Ideas

### Type providers for interesting data sources

The F# type provider mechanism makes it possible to integrate external data sources into F#. One good example is the [WorldBank type provider from F# Data](https://fsharp.github.io/FSharp.Data/library/WorldBank.html), which implements type provider for a specific (and interesting) data source. 

![WorldBank type provider](http://tomasp.net/articles/fsharp-loosely-typed/tooltip.png)

Another kind is the [JSON type provider](https://fsharp.github.io/FSharp.Data/library/JsonProvider.html), which implements type provider for a speicfic data _format_ (using type inference mechanism), but it can work with any JSON files.

There is a number of interesting data sources and creating a type provider for them would be an interesting project:

 - Open government data sources: [EU open data](https://github.com/fsharp/FSharp.Data/issues/470), [UK open data](https://data.gov.uk) and [US open data](https://data.gov) 
 - [Yahoo Finance type provider](https://github.com/fsharp/FSharp.Data/issues/39) for accessing stock prices
 - [PDF type provider](https://github.com/fsharp/FSharp.Data/issues/414) for extracting tables from PDF
 - Various REST description formats like [RAML](https://github.com/fsharp/FSharp.Data/issues/302), [WADL](https://github.com/fsharp/FSharp.Data/issues/156) an [API Blueprint](https://apiary.io/blueprint)

**Contact**: Tomas Petricek (tomas@tomasp.net or [@tomaspetricek](https://twitter.com/tomaspetricek)  
**Tags**: type providers, api, rest, web, data 

### Visual Editor for Domain Specific Languages

Domain specific languages (DSLs) give a powerful technique for writing reusable libraries (not just) in functional languages. Given a problem (i.e. processing lists), we design a set of reusable combinators (mapping, filtering, etc.). A specific problem (such as a task to multiply elements of two lists by some number and then combine them in some way) can then be easily solved just by using the available combinators.

The approach is used not just for list processing, but in many other areas - for composing user interfaces, specifying event handling, modelling financial contracts, etc. Here is an example of list processing (using F#):

    List.zip 
        (list1 |> List.map (fun x -> x * 10))
        (list2 |> List.map (fun x -> x * -10))
    |> List.iter (fun (a, b) -> printfn "left %d, right %d" a b)

The code can be quite nicely represented visually, showing how the data flow through the combinators:

![Sample Diagram](http://tomasp.net/academic/teaching/projects/dsl.png)

The idea of this project is to design some editor (or, at least, visualizer) that can take code written using DSL and display it visually and allow the user to edit it. This should work for any DSL (although it may need to be annotated in some way).

**Contact**: Tomas Petricek (tomas@tomasp.net or [@tomaspetricek](https://twitter.com/tomaspetricek)  
**Tags**: dsl, user interface, visual programming

### Fuzzy type-checking 

In statically typed programming languages like F#, the type system is used to check that types of expressions are used correctly and are correctly composed (i.e. you call a function with an argument of a correct type).

However, sometimes we do not quite surely know what the type of an expression is. This may be because we're calling some dynamically typed code (JavaScript interop) or because we're loading data from an external data source that does not have a clear type.

The goal of this project is to create a "fuzzy" type system that can deal with such uncertainty in programs. For example, if the type system can tell us that the property `Name` is a string in 99% of the cases, then that's quite useful information!

This is probably more theoretical or experimental project, but it could be implemented as a simple language (i.e. for data processing) or it could be written as an additional checker on top of some F# type provider (or it could be integrated in a type provider). On the thoery side, there might be some connection [with Fuzzy Logic](https://en.wikipedia.org/wiki/Fuzzy_logic).

**Contact**: Tomas Petricek (tomas@tomasp.net or [@tomaspetricek](https://twitter.com/tomaspetricek)  
**Tags**: types, fuzzy logic, checking, static, dynamic

## Notes

NOTE: This is a temporary page; we are working on a new website that will provide a form for submitting and searching for projects.
