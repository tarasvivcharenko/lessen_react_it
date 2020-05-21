import React, {Component} from 'react';

class Profile extends Component {
  render() {
    return (
        <div className='content'>
          <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt=""/>
          </div>
          <div>
            ava + description
          </div>
          <div className="">
            My Post
            <div className="">New Post</div>
            <div className="">
              <div className="">post1</div>
              <div className="">post2</div>
            </div>
          </div>
        </div>
    );
  }
}

export default Profile;