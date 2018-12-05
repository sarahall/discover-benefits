export default function ({ store, redirect }) {
  if (store.state.form.disclaimer !== true) {
    return redirect('/')
  }
}
