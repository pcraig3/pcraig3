const emojis = ['🐙', '😇', '👾', '🦊', '🦔', '🦇', '🙃', '🚲', '⚒️', '🍜']

const newEmojiEveryTenSeconds = () => {
  let index = Math.floor(new Date() / 10000) % emojis.length
  return emojis[index]
}

export default () => (
  <span title="Eat the rich!">{newEmojiEveryTenSeconds()}</span>
)
