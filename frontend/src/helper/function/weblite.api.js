// W && R
const { W } = window


export default (vueRoot) => {
  /* Load Data */
  // get user
  W.loadData().then(({ user: { name }, creator }) => {
    vueRoot.authorName = name
    vueRoot.noteCreator = creator
  })

  W.start()
}
