# Functional programming introduction

Reduce operation is the key operation for solving many problems, and it's built-in many data structures in Scala.
It's very powerful but requires some practice to start using it for solving problems.

An example task from https://www.crackingthecodinginterview.com/ is as follow. You are asked to implement a program that
compresses strings a-Z. For input `aaa`, the program should return `a3`; if a compressed version is the same length as the input text
or smaller, the program should return the original text. For example, input `ab` should return `ab`.

## Imperative solution

The natural solution for many developers would be an imperative solution which is based on mutation for a local state and loops.

Here is an example in JavaScript

```javascript
function compress(text) {
    let compressedResult = "";
    let tmp = "";
    for (let i = 0; i < text.length; i++) {
        let c = text.charAt(i);
        if (!tmp || tmp.charAt(tmp.length - 1) === c) {
            tmp += c;
        } else {
            compressedResult += tmp.charAt(0) + tmp.length;
            tmp = c;
        }
    }
    compressedResult += tmp.charAt(0) + tmp.length;
    return compressedResult.length < text.length ? compressedResult : text;
}
```
[Task 1.6 sources](https://github.com/cranberrysoft/cracking-interview-javascript/blob/main/src/chapter1/task-1-6/SolutionSimpleLoop.js)


This solution works, and it might be efficient. The problem is it involves many conditions, which are very often
a source of bugs. Also, it requires a lot of effort from a developer to parse in their mind every line and get a general idea of how it works. Yes, a developer has to imitate the runtime execution of the program.

Let's consider now a functional solution in Scala

```scala
def compress(text: String): String = {
    return text
      .map(character => Group(character.toString))
      .reduceLeftOption(
        (a, b) => if (a.last() == b.last()) Group(a.character, a.count + b.count) else Group(a.result() + b.character, b.count)
      )
      .filter(_.resultSize() < text.length)
      .map(_.result())
      .getOrElse(text)
}

case class Group(character: String, count: Int = 1) {

  def last(): String = character.last.toString

  def result(): String = character + count

  def resultSize() = character.length
}
```
[Task 1.6 sources](https://github.com/cranberrysoft/cracking-interview-scala/blob/main/src/main/scala/chapter1/task_1_6/Task_1_6.scala)

This time we use `reduceLeft` operation, which significantly reduces the complexity of the solution. You might notice for this approach, a developer focuses more on what they want to get, not on instructing how exactly it should happen. We still have some `if` conditions, but in Scala they are expressions, not statements, so we can nicely compose them with our reduced operation. Also, some `If` conditions were replaced with filtering.
This downside of the solution is a developer needs to understand reduce operation, but still this knowledge pays off in long term, and it reduces a lot of work needed to accomplish a task.

//TODO
Give more context for reduce/reduceLeft operations for Scala.