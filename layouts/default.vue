<template>
  <div class="min-h-[100vh] min-w-[960px]">
    <div class="my-0 flex min-h-[100vh] flex-col p-0">
      <BarHeader />
      <div class="main-content flex flex-1 justify-center pb-[2.5rem]">
        <div class="content-container myShadow flex">
          <div
            class="sticky top-0 w-[15%] min-w-[12rem] bg-leftbar-bg *:text-nowrap">
            <BarLeft class="sticky top-0 min-w-[100%] *:text-nowrap" />
          </div>
          <slot />
        </div>
      </div>
    </div>
    <BarFooter class="fixed bottom-0 h-[2rem]" />
  </div>
</template>
