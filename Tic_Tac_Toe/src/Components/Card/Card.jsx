import Icon from '../Icon/Icon';

function Card ({ gameEnd, player, onPlay, index}) {
    let icon = <Icon />
    if (player == "X") {
        icon = <Icon name='X' />
    } else if (player == "O") {
        icon = <Icon name='O' />
    }
    return(
        <div className='flex justify-center items-center size-[120px] border-4 border-solid border-[#6F61C0] p-4 rounded-2xl bg-[#A084E8] hover:bg-white' onClick={() => !gameEnd && player=="" && onPlay(index) }>
            {icon}
        </div>
    )
}

export default Card;