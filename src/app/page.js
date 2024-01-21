import React from 'react';
import Revealable from '../components/Revealable';
import Snippet from '../components/Snippet';
import * as Snippets from '../constants/Snippets';

function Home() {
  return (
    <main>
      <h1>Introduction to Python</h1>
      <h2>Variables and Basic Data Types</h2>
      <p>
        Python is a high-level, interpreted
        programming language. In Python, you don't
        need to specify the data type of a
        variable when you declare it. Python
        automatically determines the data type
        based on the value you assign.
      </p>
      <Revealable>
        <Snippet>
          {Snippets.FIRST_SNIPPET}
        </Snippet>
      </Revealable>

      <h2>
        Control Flow: Conditionals and Loops
      </h2>
      <p>
        Python has standard control flow
        structures like if statements, for and
        while loops.
      </p>

      <Revealable>
        <Snippet>
          {Snippets.SECOND_SNIPPET}
        </Snippet>
      </Revealable>

      <h2>Functions and Basic Data Structures</h2>

      <p>
        In Python, you can define your own
        functions using the def keyword. Python
        also has built-in data structures like
        lists and dictionaries.
      </p>

      <Revealable>
        <Snippet>
          {Snippets.THIRD_SNIPPET}
        </Snippet>
      </Revealable>
    </main>
  );
}

export default Home;
