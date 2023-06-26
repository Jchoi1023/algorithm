// 2660. Determine the Winner of a Bowling Game

// You are given two 0-indexed integer arrays player1 and player2, that represent the number of pins that player 1 and player 2 hit in a bowling game, respectively.

// The bowling game consists of n turns, and the number of pins in each turn is exactly 10.

// Assume a player hit xi pins in the ith turn. The value of the ith turn for the player is:

// 2xi if the player hit 10 pins in any of the previous two turns.
// Otherwise, It is xi.
// The score of the player is the sum of the values of their n turns.

// Return

// 1 if the score of player 1 is more than the score of player 2,
// 2 if the score of player 2 is more than the score of player 1, and
// 0 in case of a draw.

// Code

var isWinner = function (player1, player2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < player1.length; i++) {
    if (player1[i - 1] == 10 || player1[i - 2] == 10) {
      sum1 += player1[i] * 2;
    } else {
      sum1 += player1[i];
    }
  }

  for (let i = 0; i < player2.length; i++) {
    if (player2[i - 1] == 10 || player2[i - 2] == 10) {
      sum2 += player2[i] * 2;
    } else {
      sum2 += player2[i];
    }
  }
  if (sum1 > sum2) {
    return 1;
  } else if (sum1 == sum2) {
    return 0;
  } else if (sum1 < sum2) {
    return 2;
  }
};
