# Hello Scala

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
First of all, you may notice that instead of class, we use a Scala keyword object representing a singleton in Scala. This feature is helpful if you don't need a user to create many instances of one class.

The second difference is a keyword def, which defines a method in Scala. In Java, you don't need to specify any special keyword to define a method.
The next difference is about defining method parameters in Scala. The type is defined after the variable name with an additional semicolon. Also, the type returned by the method in Scala is defined at the end with type Unit, which is a void equivalent in Java.
Finally, we have different method names for printing text to standard output. You may also notice a missing semicolon at the end of the line, which is optional for Scala.
At first glance, you may be overwhelmed by the number of differences between these two languages, but I may assure you that you will get used to the new syntax. After a while, you will be able to switch between the languages easily. IDE is your friend, and it will help you to adopt this process. The syntax differences in Scala were necessary to convey the functional paradigm.