import { reactive } from 'vue'

const state = reactive<{
  searching: boolean
}>({
  searching: false,
})

export const useSearching = () => {
  const setSearching = (searching: boolean) => {
    state.searching = searching
  }
  const isSearching = () => state.searching
  return { ...toRefs(state), setSearching, isSearching }
}
