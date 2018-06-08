import React, { Component } from "react";
import PhotoWall from "./Components/PhotoWall";
import AddPhoto from "./Components/AddPhoto";
import Timer from "./Components/Timer";
import Youtube from "./Components/Youtube";
import { Route } from "react-router-dom";
class App extends Component {
    constructor() {
        super();
        this.state = {
            posts: [
                {
                    id: 0,
                    description: "I wantttt",
                    imageLink:
                        "http://weknowyourdreams.com/images/food/food-14.jpg"

                },
                {
                    id: 1,
                    description: "coooooool",
                    imageLink:
                        "http://weknowyourdreams.com/images/food/food-02.jpg"

                },
                {
                    id: 2,
                    description: "Yummyyyy!!",
                    imageLink:
                        "http://weknowyourdreams.com/images/food/food-12.jpg"
                }
            ]
        };
        this.removePhoto = this.removePhoto.bind(this);
    }
    removePhoto(postRemoved) {
        this.setState(state => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }));
    }
    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }));
    }

    render() {
        return (
            <div>
                <Timer start={Date.now()} />
                <h1>Foodie</h1>
                <Route
                    exact
                    path="/"
                    render={() => (
                        <div>
                            <PhotoWall
                                posts={this.state.posts}
                                onRemovePhoto={this.removePhoto}
                                onNavigate={this.navigate}
                            />
                            <Youtube />

                        </div>
                    )}
                />
                <Route
                    path="/AddPhoto"
                    render={({ history }) => (
                        <AddPhoto
                            onAddPhoto={addedPost => {
                                this.addPhoto(addedPost);
                                history.push("/");
                            }}
                        />
                    )}
                />
            </div>
        );
    }
}
export default App;
