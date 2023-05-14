# Testing Server Actions (Alpha in Next.js 13.4)

## Simple Form Post (/form-post)

Our todos are stored in an array in memory **on the server** (not on the client).
In real life, we would store them in a database.

## Form Post With Status (/form-post-with-status)

This is the same as the previous example, but with a delay to simulate a slow server.  
We can use an experimental hook useFormStatus to disable the submit button while the server is processing the request.  
Since hooks are only allowed in client components, we had to create a separate component for the button.

## Form Post With Transition (/form-post-with-transition)

This is the same as the previous example, but we do not use a form.  
Instead, we pass the server function as a prop to the button component.  
We also moved the input field into the button component.  
We call the server function via the onClick property of the button.
Notice that we wrapped the server function in a transition, so that we can disable the button while pending.

## Pokemon Search (/pokemon-search)

This is a demo of how we can import and call a server function from a client component.
