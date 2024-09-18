import { Ref, isRef } from 'vue';

export const highlightElement = (
  dom: Ref<HTMLDivElement>
) => {
  if (isRef(dom)) {
    dom.value.animate(
      { opacity: [1, 0.3, 1] },
      1500
    );
  }
};

export default highlightElement;
