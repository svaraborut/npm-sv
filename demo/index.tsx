import { fruit, fruitSalad } from '@/index.ts'

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('button')
    const field = document.getElementById('field')
    if (!button) return

    function updateButton() {
        if (!button) return
        const f = fruit()
        console.log(f)
        button.innerHTML = f + ' Click'

        // Other updates
        if (field) field.innerHTML = fruitSalad()
    }

    updateButton()
    button.addEventListener('click', updateButton)
})
