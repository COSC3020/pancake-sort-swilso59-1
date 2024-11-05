# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your
answer to this markdown file.

## Answer 

1. Comparisons
   - In pancakeSort we iterate through the array from the end to the beginning
   - Each iteration calls maxIndex to find the largest element in the unsorted portion
   - In the the first iteration we search the entire array. This takes $n$ comparisons
   - The second iteration we search the array excluding the previous maxIndex, This takes $(n - 1)$ comparisons 
   - So with $n$ iterations, each requires comparisons proportional to the length of the unsorted section
   - This leaves us with time complexity of $\Theta(n^{2})$

2. Flips
   - For each iteraiton of the main for loop there can be up to 2 flips
      - One flip to move the max element to the front of the array
      - Another flip to move the max element to the end of the array
   - The main loop in pancakeSort iterates from the end of the array to the beginning with at most $n - 1$ iterations
   - With this information we can see that at most there are $2(n - 1)$ flips
   - As $n$ grows large, the total number of flips is asymptotically linear
   - This gives us a time complexity of $\Theta(n)$
  
For this assignment. I began by focusing on the calls to `flip()`. I knew we would have to make multiple flips to move the max element to its correct position at the end of the array. This lead me to working on a function to find the maxIndex element. Once both of these were set up I created the main pancakesort function that utilizes each operation in order to sort the array. During this I had a little bit of difficulty implementing the `flip()` so that it operates appropriately as it is described in the assignment prompt.
I also added some test cases to the `code.test.js` file to test that `flip()` is working appropriately. 

I looked at a few repositories. 
- https://github.com/COSC3020/pancake-sort-swilso59
- https://github.com/COSC3020/pancake-sort-ross223
- https://github.com/COSC3020/pancake-sort-ZachRenz

I also looked at some websites to get an idea of the implementation
- https://www.geeksforgeeks.org/pancake-sorting/
- https://reintech.io/blog/javascript-pancake-sort-tutorial

“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”
