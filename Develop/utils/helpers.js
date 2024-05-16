module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let nameLabel = "🗝";

    if (randomNum > 0.7) {
      nameLabel = "🖼";
    } else if (randomNum > 0.4) {
      nameLabel = "📮";
    }

    return `<span aria-label="label">${nameLabel}</span>`;
  },

  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

};
