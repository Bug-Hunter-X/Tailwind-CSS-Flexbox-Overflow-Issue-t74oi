```javascript
<div class="flex">
  <div class="bg-red-500 p-4 w-1/2 max-w-full flex-shrink-0 overflow-auto"></div>
  <div class="bg-blue-500 p-4 w-1/2 max-w-full flex-shrink-0 overflow-auto"></div>
</div>
```
This solution adds `max-w-full` to prevent items from growing too large and `flex-shrink-0` to prevent them from shrinking below their allocated width. `overflow-auto` allows for scrolling if content exceeds the space provided.