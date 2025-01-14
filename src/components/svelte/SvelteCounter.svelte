<script>
  let count = 0;

  const increment = () => {
    count += 1;
  };

  const decrement = () => {
    count -= 1;
  };
</script>

<div>
  <h1>Svelte Counter: {count}</h1>
  <button on:click={decrement}>-</button>
  <button on:click={increment}>+</button>
</div>