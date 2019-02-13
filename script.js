var textArr = [];
for(let i = 0; i<tweets.length; i++){
    textArr.push(tweets[i]);
}

class List extends React.Component {

    render() {
        let itemsElements = this.props.items.map((item) => {
                              return <li><h6>{item.user.name}@{item.user.screen_name}</h6> <h6>{item.user.created_at}</h6> <img src = {item.user.profile_image_url}/><p>{item.text}</p> <h5>Retweets: {item.retweet_count} Favorites: {item.favorite_count}</h5></li>
                            });
        return (
                <div>
                <h1>{tweets[0].user.name}</h1>
                    <ul>
                        {itemsElements}
                    </ul>
                </div>
                );
        }
}



ReactDOM.render(
    <List items={textArr}/>,
    document.getElementById('root')
);