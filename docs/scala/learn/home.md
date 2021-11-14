# Hello Scala

I remember my first steps in Basic and my first program Hello World.
I like staring a journey with new technology using this "old-school" approach for writing  Hello World application first which reminds me the old times when computers were something magic for me.

```scala
object HelloScala {

  def main(args: Array[String]): Unit = {
    println("Hello Scala !")
  }
}
```

```java
public class HelloJava {

    public static void main(String[] args) {
        System.out.println("Hello Java !");
    }
}
```

There are a few differences between Java and Scala versions of the application.
First of all, you may notice that instead of _class_, we use a Scala keyword _object_ representing a singleton in Scala. This feature is helpful if you don't need a user to create many instances of one class.

The second difference is a keyword _def_, which defines a method in Scala. In Java, you don't need to specify any special keyword to define a method.
The next difference is about defining method parameters in Scala. The type is defined after the variable name with an additional semicolon. Also, the type returned by the method in Scala is defined at the end with type _Unit_, which is a _void_ equivalent in Java.
Finally, we have different method names for printing text to standard output. You may also notice a missing **semicolon** at the end of the line, which **is optional for Scala**.
At first glance, you may be overwhelmed by the number of differences between these two languages, but I may assure you that you will get used to the new syntax. After some time, you will be able to switch between the languages easily. A good IDE is your friend, and it will help you to adopt this process. The syntax differences in Scala were necessary to convey the functional paradigm.