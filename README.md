**proxy-me-bro** is a web browser for people with cognitive impairments. It downloads web pages and uses JavaScript to translate it into a linear, simple-to-follow site with a consistent style.

![Screencast GIF, typing http://www.amazon.com in a URL bar, pressing enter, the text “Simple Amazon” loads below, with a button to “Buy Something”. In the background server logs show things happening](https://cdn-images-1.medium.com/max/800/1*4Ap4SWqiTAC-qh3NZeb-hQ.gif)

## Installation

```
brew install node
brew install ruby
brew install ruby-build
rbenv install 2.6.0
echo "2.6.0" > ~/.rbenv/version
bundler install
```

## Running the development server

```
foreman start -f Procfile.dev
```
