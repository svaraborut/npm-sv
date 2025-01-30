import { fruit } from '@/index.ts'

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button')
    if (!button) return

    function updateButton() {
        if (!button) return
        const f = fruit()
        console.log(f)
        button.innerHTML = f + ' Click'
    }

    updateButton()
    button.addEventListener('click', updateButton)
})
