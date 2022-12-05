import "./Blog.css";

const Blogs = () => {
  return (
    <div className="container">
      <h1>Select today's blogs</h1>
      <div className="blogs-container">
        <div className="blog">
          <img src="https://reactjs.org/logo-og.png" alt="" />
          <div className="blog-body">
            <h2>How Does react work?</h2>
            <br />
            <p>
              <i>
                ReactJS divides the UI into isolated reusable pieces of code
                known as components. React components work similarly to
                JavaScript functions as they accept arbitrary inputs called
                properties or props. It's possible to have as many components as
                necessary without cluttering your code.
              </i>
            </p>
            <br />
            <p>
              React মুলত actural dom and virtual dom এর মাঝে ভিন্নতা করে কাজ
              করে। React এর ডাটা ফ্লও Unidirectional, মানে হল উপর থেকে নিজের
              দিকে data প্রবাহিত হয়।
            </p>
            <p>তাই যেকোন সমস্যা খুব তাড়াতাড়ি সমাধান করা যায়।</p>
          </div>
        </div>
        <div className="blog">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5612AQHVgtR_BBBdjw/article-cover_image-shrink_600_2000/0/1640192078554?e=2147483647&v=beta&t=N4iWxCfggYTW0KmsL7bx6FwTfG8HtdhXaoQstXvp4sY"
            alt=""
          />
          <div className="blog-body">
            <h2>Props vs State?</h2>
            <br />
            <p>
              <i>
                Props are used to pass data from one component to another. The
                state is a local data storage that is local to the component
                only and cannot be passed to other components
              </i>
            </p>
            <br />
            <p>
              Props হল একটা Components থেকে data অন্য componet এ পাঠাই, পাঠানোর
              সময় একটা Unique key নেয়, যার মাধ্যমে React কাজটি করে থাকে।
            </p>
            <p>State হল লোকাল ডাটা স্টোর করে রাখে, আবার আপডেট করে দেই</p>
          </div>
        </div>
        <div className="blog">
          <img
            src="https://res.cloudinary.com/academind-gmbh/image/upload//v1/academind.com/content/tutorials/useeffect-abort-http-requests/react-useeffect-http"
            alt=""
          />
          <div className="blog-body">
            <h2>UseEffect uses without fetch data?</h2>
            <br />
            <p>
              <i>Making a request and changing the state on render like that will
              cause the component to re-render forever. Every time the component
              renders.</i>
            </p>
            <br />
            <p>
                আমাদের ওয়েবসাইট load সময় সাথে সাথে যদি কোন কিছু load করতে হয়, তাহলে আমরা useEffect ব্যবহার করি। মানে হল, আমদের site load হবার সাথে সাথে এটি হয়ে যাবে। 
            </p>
            <p>
                ওয়েবসাইট এর যে asyncronass কাজ গুলো করতে হয় এর মাধ্যমে 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
