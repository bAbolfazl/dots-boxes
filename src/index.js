const myFunction = () => {
    // vars
    const TURN = {
        blue: 'blue',
        red: 'red'
    }
    const STATE = {
        turn: TURN.blue,

        redScore: 0,
        blueScore: 0,
    }
    let clearLineColor = true

    const lines = document.querySelectorAll('.horizontal_line, .vertical_line')
    const linesArray = Array.prototype.slice.call(lines)

    const caption = document.querySelector('#player_turn')

    const blueScore = document.querySelector('#blue-score')
    const redScore = document.querySelector('#red-score')

    const htmlElement = document.querySelector('html')

    // funcs
    const isColor = (element, color) => {
        if (!element) return
        return element.classList.contains(`${color}`)
    }
    const checkNeighbors = (target) => {
        const index = Number(target.dataset.index)
        console.log(index)

        const isBlue = isColor(target, 'blue')

        const plus7 = linesArray.find(line => Number(line.dataset.index) === Number(index + 7))
        const mines7 = linesArray.find(line => Number(line.dataset.index) === Number(index - 7))
        const plus8 = linesArray.find(line => Number(line.dataset.index) === Number(index + 8))
        const mines8 = linesArray.find(line => Number(line.dataset.index) === Number(index - 8))
        // for horizontal
        const plus1 = linesArray.find(line => Number(line.dataset.index) === Number(index + 1))
        const mines1 = linesArray.find(line => Number(line.dataset.index) === Number(index - 1))
        // for vertical
        const plus15 = linesArray.find(line => Number(line.dataset.index) === Number(index + 15))
        const mines15 = linesArray.find(line => Number(line.dataset.index) === Number(index - 15))

        // const oneIsBlue = isColor(one, 'blue')
        // const twoIsBlue = isColor(two, 'blue')
        // const threeIsBlue = isColor(three, 'blue')
        // const fourIsBlue = isColor(four, 'blue')
        // const fiveIsBlue = isColor(five, 'blue')
        // const sixIsBlue = isColor(six, 'blue')
        // const sevenIsBlue = isColor(seven, 'blue')
        // const eightIsBlue = isColor(eight, 'blue')

        const mines7IsSelected = mines7 && mines7.classList.contains('selected')
        const plus7IsSelected = plus7 && plus7.classList.contains('selected')
        const mines8IsSelected = mines8 && mines8.classList.contains('selected')
        const plus8IsSelected = plus8 && plus8.classList.contains('selected')
        const mines1IsSelected = mines1 && mines1.classList.contains('selected')
        const plus1IsSelected = plus1 && plus1.classList.contains('selected')
        const plus15IsSelected = plus15 && plus15.classList.contains('selected')
        const mines15IsSelected = mines15 && mines15.classList.contains('selected')
        // debugger
        const thisStateTurn = STATE.turn
        if (target.classList.contains('horizontal_line')) {
            if (mines7IsSelected && mines8IsSelected && mines15IsSelected) {
                handle_score(thisStateTurn, index, 1)
            }
            if (plus7IsSelected && plus8IsSelected && plus15IsSelected) {
                handle_score(thisStateTurn, index, 2)
            }

        } else if
            (target.classList.contains('vertical_line')) {
            if (mines1IsSelected && mines8IsSelected && plus7IsSelected) {
                handle_score(thisStateTurn, index, 3)
            }
            if (plus8IsSelected && mines7IsSelected && plus1IsSelected) {
                handle_score(thisStateTurn, index, 4)
            }

        }

        // console.log(xxx)
        // else {
        //     const one = linesArray.find(line => Number(line.dataset.index) === Number(index + 7))
        //     const two = linesArray.find(line => Number(line.dataset.index) === Number(index - 7))
        //     const three = linesArray.find(line => Number(line.dataset.index) === Number(index + 8))
        //     const four = linesArray.find(line => Number(line.dataset.index) === Number(index - 8))
        //     // for horizontal
        //     const five = linesArray.find(line => Number(line.dataset.index) === Number(index + 1))
        //     const six = linesArray.find(line => Number(line.dataset.index) === Number(index - 1))
        //     // for vertical
        //     const seven = linesArray.find(line => Number(line.dataset.index) === Number(index + 15))
        //     const eight = linesArray.find(line => Number(line.dataset.index) === Number(index - 15))

        //     const oneIsRed = isColor(one, 'red')
        //     const twoIsRed = isColor(two, 'red')
        //     const threeIsRed = isColor(three, 'red')
        //     const fourIsRed = isColor(four, 'red')
        //     const fiveIsRed = isColor(five, 'red')
        //     const sixIsRed = isColor(six, 'red')
        //     const sevenIsRed = isColor(seven, 'red')
        //     const eightIsRed = isColor(eight, 'red')
        //     // debugger
        //     if (
        //         (target.classList.contains('horizontal_line')) &&
        //         (
        //             (oneIsRed && threeIsRed && sevenIsRed) ||
        //             (twoIsRed && fourIsRed && eightIsRed)
        //         )
        //     ) {
        //         handle_score(TURN.red)

        //     } else if (
        //         (target.classList.contains('vertical_line')) &&
        //         (
        //             (fiveIsRed && threeIsRed && twoIsRed) ||
        //             (fourIsRed && oneIsRed && sixIsRed)
        //         )
        //     ) {
        //         handle_score(TURN.red)

        //     }

        //     // console.log(xxx)
        // }

        // console.log(isBlue)
    }
    const getPosition = (index, position) => {
        if (position === 2) {

            return `top: ; left: `
        }
    }
    const handle_score = (color, index, position) => {

        // alert(position)
        const thisColor = color === TURN.red ? TURN.blue : TURN.red
        if (thisColor === TURN.red) { ++STATE.redScore; STATE.turn = TURN.red }
        else { ++STATE.blueScore; STATE.turn = TURN.blue }

        // const newElement = `
        //     <div class="filled-box" style="${getPosition(index, position)}">
        //         w
        //     </div>
        // `
        // document.querySelector('.container').innerHTML += (newElement)

        handle_scoreBoard(thisColor)
    }
    // const handle_background = () => {
    //     if (STATE.turn === TURN.blue) {
    //         htmlElement.classList.remove('bg--blue')
    //         htmlElement.classList.add('bg--red')
    //     } else {

    //         htmlElement.classList.add('bg--blue')
    //         htmlElement.classList.remove('bg--red')
    //     }
    // }
    const handle_scoreBoard = (color) => {
        if (color === TURN.red) redScore.innerText = STATE.redScore
        else blueScore.innerText = STATE.blueScore
    }
    const handle_caption_text = () => {
        caption.innerText = `${STATE.turn}`

        if (STATE.turn === TURN.red) {
            caption.classList.add('text--red')
            caption.classList.remove('text--blue')

            htmlElement.classList.add('bg--red')
            htmlElement.classList.remove('bg--blue')
        } else {
            caption.classList.remove('text--red')
            caption.classList.add('text--blue')

            htmlElement.classList.remove('bg--red')
            htmlElement.classList.add('bg--blue')
        }
    }
    const handle_rules = (target) => {
        // console.log('target',target)
        // const isBlue = isColor(target, 'blue')
        // const length = lines.length

        checkNeighbors(target)
        // console.log(isBlue)

    }
    const handle_finish = () => {
        let winner = STATE.blueScore > STATE.redScore ? TURN.blue : TURN.red
        if (STATE.blueScore === STATE.redScore) winner = 'no one'
        alert(`${winner} is the winner`)
        location.reload()
    }

    const on_lines_hover = (e) => {
        if (e.currentTarget.classList.contains('selected')) return

        e.currentTarget.classList.add(`${STATE.turn === TURN.blue ? 'blue' : 'red'}`)
        clearLineColor = true
        // debugger
    }
    const on_lines_unhover = (e) => {
        if (e.currentTarget.classList.contains('selected')) return

        // if (e.currentTarget.classList.contains('red') || e.currentTarget.classList.contains('blue')) return

        if (!clearLineColor) return
        e.currentTarget.classList.remove(`${STATE.turn === TURN.blue ? 'blue' : 'red'}`)
        // debugger
    }
    const on_lines_click = (e) => {
        if (e.currentTarget.classList.contains('selected')) return

        e.currentTarget.classList.add(`${STATE.turn === TURN.blue ? 'blue' : 'red'}`)
        e.currentTarget.classList.add('selected')
        clearLineColor = false


        if (STATE.turn === TURN.blue) STATE.turn = TURN.red
        else STATE.turn = TURN.blue

        handle_rules(e.currentTarget)

        handle_caption_text()
        // handle_background()


        if (!linesArray.find(line => !line.classList.contains('selected'))) {
            handle_finish()
            return
        }
        // debugger
    }

    // events
    lines.forEach(item => item.addEventListener('mouseenter', on_lines_hover))
    lines.forEach(item => item.addEventListener('mouseleave', on_lines_unhover))

    lines.forEach(item => item.addEventListener('click', on_lines_click))


    // imediate invoke
    handle_caption_text()
    lines.forEach((item, index) => item.setAttribute('data-index', index))

    window.lines = lines
    window.STATE = STATE
    window.linesArray = linesArray
}

window.addEventListener('load', myFunction)