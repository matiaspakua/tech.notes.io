# Java Now Allowed

<style>
  .back-button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
</style>

<button class="back-button" onclick="window.location.href='https://matiaspakua.github.io/tech.notes.io'">All notes</button>

Java 11 provides a number of built-in data structures, including:

Array
ArrayList
LinkedList
HashSet
TreeSet
HashMap
TreeMap
Queue
Stack
PriorityQueue
ArrayDeque
ConcurrentHashMap
ConcurrentHashMap.KeySetView
ConcurrentHashMap.ValuesView
ConcurrentHashMap.EntrySetView

These data structures are implemented in the Java Collections Framework and provide a wide range of functionality for storing, manipulating, and accessing data.


## Array not allowed

In Java, once an array is created, there are certain operations that are not allowed or not supported, including:

1. Changing the size of an array: Once an array is created, its size is fixed and cannot be changed dynamically.

```java
int[] arr = new int[5];
arr.length = 10; // Not allowed
```
Error: cannot assign a value to final variable length

3. Removing an element from an array: There is no direct way to remove an element from an array. You can set the element to null or some other default value, but it will still occupy the same space in the array.
4.Adding an element to an array: You cannot add an element to an array directly. You have to create a new array with the desired size and copy the elements from the old array to the new array.
5. Sorting a multidimensional array: You can only sort a one-dimensional array directly in Java. If you have a multidimensional array, you have to sort each row or column separately.
6. Comparing arrays for equality: The == operator can only be used to check if two arrays refer to the same object in memory, not if their contents are the same. To compare the contents of two arrays, you have to use the Arrays.equals() method or loop through the arrays and compare each element.

```java
int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};
if (arr1 == arr2) { // Not allowed
    System.out.println("Arrays are equal");
}
```

8. Creating an array of generic type: You cannot create an array of a generic type directly in Java, because the type information is erased at runtime. You can use a workaround by creating an array of a raw type or using a collection instead.
9. Using negative indices: You cannot use negative indices to access elements in an array. If you try to do so, you will get an ArrayIndexOutOfBoundsException.
10. Initializing an array with a non-constant value: You cannot use a non-constant value to initialize the elements of an array directly. You can use a loop or a method call to initialize the elements instead.


The errors that are typically shown for each not allowed operation on arrays are:

 - IndexOutOfBoundsException - when trying to access an index that is outside the bounds of the array.
 - NullPointerException - when trying to perform an operation on a null array.
 - UnsupportedOperationException - when trying to modify an immutable array or perform an unsupported operation on the array.

