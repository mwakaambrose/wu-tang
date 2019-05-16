#### Polymorphism 
Is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is
used to refer to a child class object
###### Example
A parent class `Vehicle` has the function `drivenBy` which returns driver. A child class 
`Toyota` which is a petrol can and not smart inherits from 
`Vehicle` and is now driven by a driver. 

Say a class `Tesla` inherits from `Vehicle` but is not driven
by a driver, instead its self driven (auto pilot). The class 
`Tesla` will have to override the `drivenBy` method of the parent and
return auto pilot. So the parent class `Vehicle` can take it
form and boast that its self driven. That is polymorphism.


#### Testing
In babel preset, `"test": ["jest"]` option doesn't allow me to compile
and yet when its not added to the `rc` file, the tests won't run. Look into this


####TODOs
[ ] - Figure out babel 7