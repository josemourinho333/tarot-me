import TarotCardCollapse from "./TarotCardCollapse";

const Modal = ({id, card, direction}) => {

  const moreInfo = Object.keys(card).map((key, index) => {
    if (key !== 'id' && key !== 'name' && key !== 'description' && key!== 'family') {
      return (
        <TarotCardCollapse 
          key={index}
          title={key}
          keywords={card[`${key}`][`${direction}`]?.keywords}
          meaning={card[`${key}`][`${direction}`]?.meaning}
        />
      )
    }
  });

  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-lg">{card.name} | {direction}</h3>
          <p className="py-4">{card.description}</p>
          {moreInfo}
          <div className="modal-action">
            <button className="btn btn-primary">Share</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;