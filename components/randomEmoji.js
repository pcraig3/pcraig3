const emojis = ['🐙', '😇', '👾', '🦊', '🦔', '🦇', '🙃', '🚲', '⚒️', '🍜']

const newEmojiEveryTenSeconds = () => {
  let index = Math.floor(new Date() / 10000) % emojis.length
  return emojis[index]
}

const RandomEmoji = () => (
  <span title="Eat the rich!">{newEmojiEveryTenSeconds()}</span>
)

export default RandomEmoji