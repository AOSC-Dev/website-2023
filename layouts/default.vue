<template>
  <div>
    <div
      class="mb-[2.5rem] flex min-h-[calc(100vh-2.5rem)] min-w-[960px] flex-col">
      <BarHeader />
      <div class="content-container myShadow mx-auto flex flex-grow">
        <div
          class="sticky top-0 w-[15%] min-w-[12rem] bg-leftbar-bg *:text-nowrap">
          <BarLeft class="sticky top-0 min-w-[100%] *:text-nowrap" />
        </div>
        <slot />
      </div>
    </div>
    <BarFooter class="fixed bottom-0 h-[2rem] min-w-[960px]" />
  </div>
</template>
