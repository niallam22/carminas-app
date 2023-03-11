export default function Post(){
    return(
        <div className="post">
        <div className='image'>
          <img src="https://www.cnet.com/a/img/resize/a0d3e154d2c83f824f1e483a6731d398a26a98fd/hub/2023/03/09/b59afbdd-4421-4953-88ca-ce06eb92f5db/meow-wolf-minigolf-vr.jpg?auto=webp&fit=crop&height=720&width=1280" alt="" />
        </div>
        <div className='texts'>
          <h2>title</h2>
          <p className='info'>
            <a className='author'>Carmina Bernhardt</a>
            <time>2023-03-03</time>
          </p>
          <p className='summary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora dolorem nisi libero, sapiente nostrum ipsa enim voluptate, quam saepe commodi reiciendis beatae dolore ipsam dignissimos repellendus quas eos unde.
          </p>
        </div>
      </div>
    )
}