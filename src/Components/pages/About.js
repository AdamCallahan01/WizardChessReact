import React from 'react';
import '../../App.css';
import DefaultPage from '../DefaultPage';


function About() {
  return (
    <>
      <div className='about-container'>
      <h1>About the game</h1>
      <p>Welcome to the game of Wizard Chess. Wizard Chess is similar to the normal game of chess but 
        with radical additions to normal gameplay. Gameplay will include classes in the form of new starting formation, 
        items in the game to turn the tides in your favor, and even the ability to combine pieces for new ways to attack the opponent.
         With more ways to win besides checkmate, Wizard chess feels like an entirely different game. Wizards ages 10+</p>
      <p>The goal of Wizard Chess is to make a chess a more fun, easily accesible game for everyone, especially new players. We think that by adding fun components such as customizable skins for pieces and boards
        will make the game a lot more visually appealing. To make the game itself more exciting we will add a ton of cool features, such as abilities the players can use on a cooldown basis, power-ups
        scattered across the board, an ever expanding board, and more!
      </p>
      <h1>The Creators</h1>
      <p><small>Adam and Austin are working on this for CS-378. Austin is a BioChem major and Adam is a Computer Science major with a Math minor.</small></p>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUYGBgYGBoYHBoaGhwYGhgYGBgaGhgZGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzYkJCs0NDQ0NDQ0PTQ0NDQ0NDQ0NDQ
      0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAQoAvQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EAD4QAAEDAgMFBQYEBAUFAAAAAAEAAhEDIQQSMQVBUWGRBhNxgaEiMlKx0fAHQsHhFFNykhUjYqLxM0OCsuL/xAAZ
      AQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgICAgEEAgMAAAAAAAAAAQIREiEDMVFhQQQicaETkTJCgf/aAAwDAQACEQMRAD8A+ZbMwrqj2sYC5zjAAuSeELsKPYfEkXov/tK4nZeNdSe17DDmkEEbiF9f2d+K3stFSmC4CCQYk8YWE7vbNY9aObf2FxP8p
      3QrE212Wr0WZ303NbxIML6aPxTZ/KH9yztv/iVTq0KlI0A4PYW3Okix8Qb+SzTrpv8Aoppvtfs+N1+O/Q+W/ol3Jmobnml3BdKMmVK8CvQohMkmV5eUtCAIClolTkTjKRAAi8ZvpdJuhpWKOYRqohMvZxCFlO7chMKBxZQjuaYjVVNNFhQJelXc0jXxVSEwJaF1PZT
      s5Uxb8lMSQMxkwABvJXMU12XYvtU/BF5YGnOAHSJ00hZ8jdFR7O0p/hnWA/L1UVPw3r8G9QiD8U3/AAt6Kr/xVeB7reiw+32afd6OP7W9lquEa11RoDXEgGQZIuVxNTVdT2v7VVca4OeRDRDWiwA8OK5YrfjTSM5PZVqK155oocBqIRm4lvAKm/QkAFYqrqhWjTx1M
      asB8yinaNH+W3q76qMn4Kr2YjihvMmeK2n46kf+23+531S1Suw6MA8yqUn4Ja9meynNlLqRTJLToFDxCrIKFsiI1kCTb5qzI1P2d3qofUmZvOpQBdttUyHlw10ETy8kj3iYY8lp3qWhpktl7sokk+qhrIMQZnyPKFbDtdOUCDr4+at3Rkgm+8/lbfUlAUBLL7xyVmCR
      fduUhwvlBPFx0lSx5njPFJ2CSB14dpu0+iWLSNQm33mBN0aiwGzmzz0lPKkFWZ7UVj0y7u97SFAfR+F3VGV/AqBd8VDqpRXPpbg7qqPLOBQq8ALlyrKK7Kq2VIQ/icPmjdCG3Z3P5JjBj2RK0GNHLoueXI46RrGKezOZssHeeoVjsgcXei2aTBy6K5I+ws/5ZeTT+OJ
      hP2SB+Y+n0QTs2+q3qzm+XggPHCFS5ZCfHExxhw2/2EvVyjSSU9ingER1+azajwTawW0Le2ZSSWkQXyqwpLd/34KMq1IJHNb+ycH3ggRG+SBHgVgNCKyoRadfL1UyTZUXT2bLmNzOayIH5uI0kQdEGq1nuuDgbRBgHnBF1nMxDmQQfDkifxznWcc0aaW8FGLLyQcVWA
      RpBnSTPPd6KWOaOXOJI8kr3QIDmnWRzBHLcl3WKrEnI0HOgSHBw8IQRWvoCl6VWHSbjgmxhgJId7J0+nik0l2Ft9F2e1EmBP3KYGy2GJzCd4IIKWe5rbtmTYz+icwGKsGnSdeSzlklcS0ovsG/ZAHx+n0QquzgPi9PotxzQRfL6oGJaJ3eqyXLMbgjEdghz9EP+FHEr
      Uqt4QgZeQWq5GZuKGaVPxT1Nlt/VI03+CcpPnh0WErN4jDRaCDHGUnXxu5jS4jf+UeJVsRVaBuJ4HQc0lXaHEQXO4wPZ8ACnCN7Y5PwUrPe6HOLW8hObwXqeFdLWh3tPjKJzE+N4aPFAq1XNN2xvvf/AIUsqy0s0mdLG+48fBdCWjK1ZLQwPLXvIG8huaQOUqmIw9PR
      oc0mCJvIIkW89yUrUnNcQRoj4ZkmCdbwNwV1RF38CrqJmI1TrNmEtkAeZ3+AWxs/s26oC6SAfc4nminYOMY7KMr2jQ5hl03g7/opfKuky1xP5RlHZjWtzPcAAJIHy8VkvOZxIEDhwC08ZSc54a52Z0xb3QdIEaqgwoBIZJcDvjcYNhYdSqT1bJcd0kZ2QqpaunwHZ6rW
      gtBa343GJ8PVdHS7G0qbffzO3mx6DcpfNFFLhkz55Ra4AmPIiQRvsqNaSu9xeziBkYxoO8uJk+Q1WLiNh1YnKwdfXglHmTCXC0cy9kFOYauIyO0J5WPG+nVHx2HDWw+Q8eYhZtNo3mOa11JGW4s0quXdDhG6QeU2QKdri45/RKMeU2x4iTqpaoeRo0MQ6InUeYRWPzgA
      OOYHTjzlU2eyWzYkEWj5ncj4qll0ytGaCRMh0SAf2UxUemY8zm3cbFpkkAkx9VStVpscWl5kG8Nm/VWoQ7MbbtZWZtT/AK1T+opUnNo1i2oKzUw5LgLahMMnml8M+I0jzTGKflk2sOqxkrejZPRdtETmLSTzv81StiWt950cp/RVp1mvbMC/GUI4an8LeeqSW6kVfgzs
      fiGuPs9Us4nVP414AhoA8AkXUzH6byumFUYS7LNbMRP3uXV9nti5yC9tpkzv4Bc3haBn2QSdbCYWxh+0NenYBpg6lqjkt6RrxpLbPoTKQYJtDR4ALm+0vaZjGGnROZ5s524cb71zmN2vicQ4MzF2bRjB+guVubE7Ilje8xNifcp6kn/XHy+qyUIx3I2cnLUf7MbZOzX
      vbIYXOecrS7S17N1PyXZYDsoxjZd7UaA6Eje7iNbaLocDs7K0GPbIF/hHwgjnw/QLQbQjw4KZzci4QivyCwmEaxoAE2FyOSI/DtFwBPginkvNKzKEHYRtzAnisXaFLUrpq1K1li7Sp2Pgl8ifR8421TAM2MnWNDwKwMRSINxHMBdBtVkl2+91jVaxjK68WHEWXbxvR
      yci2KMoTf8AZEaL8fqguCs2pAgzrJ/ZaOzIcp18hBE69OK6DD7UoFuUtIkfmFnOOpJC56vTAaD70yQ7cRujnxC19mUGFjXvgkAgg7o3QspJaZeTSaA0nCSWiATaL2lJbRxVMVXg0WkhzgTneJIJvEppsZvZaAM2nmsjaDSatQwffd/7FVH/ADZmn9iNJj7i+9HxNS
      7r7v0WcB4Ir7km11GKs1UhrBEBrQvVasPDeKWwwgt01CrVBzTbU/NGKbdhbpBqjJdcniZ9EtjHQRz+7ouJecw00HSN6XxNH2uADQeqqK2iZPRvdkm5nkldk/s9h6xl9MSd7SW/IrmeyFL5Ar6NgWQAsJ3k2jp40sVYvs/ZFHDthjA2d+rj/wCRum6GGzuzuFvy8LaE
      cuHXgmarASJ937t5pyiy3yUU2a3SBtarNpJttNS2Lc01EnIU7lVcyE3UqNAkuFuYS767YmU3AWQtUKRxTJHimX4lm8pWpUadCCFDRaZx+29jOu4Nzb7fd1xWOwpG5fYKy43tLgQPbaBfVa8U90zHkhqzg205RaOGkyYjePvemajIcR896JRbIIETFv1XVZyyVIXxLWZT
      k90EGCZymdx4HzV31NXTwtAAPC36yg4iqIgDUKrAeEiFVIwttbD4WobkkzKd/jn/ABHqfqs1pBMgcrlXyHl1K55pOTs6YP7Ua7Gs/lNP34K7WU/5Ytutf0QGu+5RATf6hY7NNDDWUz/2miPvggbUYzuyWsDTa411RKbvuZQNpu/yj5b5/MhXkhvoy2OJJI1a0G+gNhP
      qhYlxLWkmZJm95sJKG2oQZb+xG8EbwpdXYRAYRw9qYnykiy6kqMWb3Z7ajaYMm/Lkukpdpq5sykYH5jvHIQq9nsCxjGlzQIAuQN66lm0aDB7TmNHMgLFyjfR1Ri67M7Y3aB5a4PuWyYiCI1BBv4Lqdm49rwCDKzKe0cHVIa2owvOkEE8IlRQ/y6gYNCok6LSs6PGBxb
      DInidyw2d8HS82mAAIA38eS3M/spZ70OVEpM4rHbErVXl4lrifZJNmjeY4n0TeC7O4lrQDiR4FpMecj9Fr19ogPyNBe/gLx4wsnH9rzReabqL8wMflaN3HxTi5MppIYfsB2+sTBmwAVv8ADS3R0jgePI7ko/tQA1jntewPJiwdoYvG5a+GxTHtDmnVRJv5KjFPozi4m
      x1CxO0JhnmurxtERI8Vyvalh7skKY/5IUlpnAV3S70lEGBqOZmDH5N7gDlWl2c2aMRiMrrMb7TvDgvpgwwZlYAA2IA3Qt58uOkZcfDn2fHW4PNpuBOp3JV7fHquo7Z7KbSrDIIY8ZwODgYcOo9VzVXVVGTfyYzgouqNDZDWQ7OwPu2J3apwMZ/LHX9kjss2d4j5Jpj4
      lZTbyY49GW3aI+E+iINpj4D6JDDNaXgO0m949VOKa0PIZ7u68+q6MI3VGeTNFu1B8J9FXEbRDmFuUiY4cZWWFJKMEgyYREo08zgOJA6lBBTezj/ms/qCHpBHbPotfZzqoDGPc1sDMW2mBxTeE7LhjHMDmODxcvZmcN9jK1Nl0PYELSGGJXKpNHoqMWtmFszswyic5qO
      JBJAAAEmdAZtJJ80zWfNZg+EecCwlatRjWtJJ0WJgH56xd05AIbsSil0dLByhAZMozqllWnxCTBCrtnMzZg3K7WRYz4hQ/YNF7s9TM8kQSTNt11rsgi4Ud0FaJk7M1mxaDbNbPj7SDU2eG3aFvUsOAq12BS43sIyrRivb7K57bdHMw8wuoxDVhbR3hSNuznexuEcx77
      XccvkLwu3r4clhcDJbfosrs/R36Refn+q2a+IEPDY90i2lwh7dsqGtI4n8QyDTpH82d0f0xf1hfO6xvvXR9ucYHYjJMik0M3+8fad8x0XJuuunjjo5OeVydGhhcQWA+w4yZ4foiDH/AOg9f2WYAdzj1K9md8bupVuEWY5M1f8AC2cXen0SuGwQc5wJMNMW3ov+IODJ
      3zyiAL2jjCBg8TDXuvLnDfvuTuUpTp7KeNjw2czn1Sm0MGGAFs3tdXG0Dz+/JLYzGF8A6JQU8tsJONaAAo2FfD2ng4fNKtcmKNQBayWiY9n3bYt2NPILXyrL7P8A/SZ/SPkth9guM7rMTtBXyMge+85W+ep8hK9sXZ0MnfxSu0aJfULjuAjy/dbux8Q3KCRpqClFWy2
      6RSpQKVbXLSZBWtUqidyWrMZqm1Q4u+w2GxIc2UdiQwFOHOj3f1T8QmjOSSehlgsg10xTNkCuFb6M/kzamhXNY8y5y6OuuWx74c7xWLNDQ2ThJYCbCT5q2Pf3Ye6PYaC+3Ibx5LP2Z2uwrWmm94Y5jiJPuu5z9Vhdq+2DHtdTw8EOEOfmy23htvVUoSbHnGKuzg8Xi
      S97nuN3uLj5pZxCZzHj/v8A/lVLzx/3/sutaOBuwOZRmRsx4/7/ANlGY8R/efomAU0JGXMLSLkAeOq93A93M3XcRGkTMq/ciNZuvUsM32pOn3wUX7FkvBb+Ab/Mb5Zf1chVdnyffZ5ub9Uf+HH3/wAKleiANfvohN32JzXgE3Zbj+dn9zfqjf4M46Pb1b9UuKbeJ6K
      zaYTeXn9C/kj4PsnZDFZqDJNw0A3m4sfkt+vVmy+efhri/adSJ09oeeoXcYmk4OPp0XLJU6O+ElKKYnVfJsj4SmYkOudVmYevchwggmZWlQxMJqLNkmzToMIPtGZ5K9agNBogYd2YyXnwgJqrUAV4mbUkyrDFhoi50m/Ewl6m1GNEm0apNMHGRrU8RBgolVyysJiRV
      bmbOUzBiLhPZvYB5JWS40IYgrktsuguvHiurrlcT2iqWfwyunpCgG6R8+ODMznpXk+8N6E7B8X0+spgMYPi+/JSGM3h335LqyZw5oUOCHx0uq8MGPjpo5pN59CoNIc+iq35JzQI4TjUZ1P0Vf4IfzKfr9EwKY3g/JR3bfhP35pZPyGaJZiOYPVe725uL8ioD+RUvIEc
      /TxRSMr9E9/zHqofXEaheB5FWycvRFIV+gHecwrd5zCuRG70UwEWg/4aPZzafc4hj81pg+BK+4Pe17GvF5AXwBrQvpHYTbmemaDz7TBLZ3s/ZZciT2jr+mn/AKjG2rVGOExPtDSRN/RdFhMLQeTked2h4gcdVh7Wpy8HdvRMFh3MIcw/TolFnpKOcbTpo6+nsdlhnd6f
      RXq7OpNnMSQN8/RZNHaFYACG6zN/qh1qdaoDmf7OsCwWlrwZLi5L+50ExdbDMbb23B0ZQ4mb+MaJGtT/AIhwGQNpgg5RY23OjVQzBAGBcrYweHyiN6hmklGK0237C06Ia3K0QAIAXsSYaGo4WbiKsklZyMVtiW0a2VnkuI21Pc1HnhA6rose81H5RpvSO3cMO4e3/SVN0
      0KauL/B80NTn6fsvCpz9EQ+BVJXUeSeNS27oUM1fvKVck8D6KAb3EdCigsg1PHoVHe8j0RLc163PojQbB927iFOQ8uqIKjeI6qe8bxHVFsq34BikeA6lWNM8B1RW1m8R1RBETuO/ihsE34M72uS9LuAR8q8Gp2ibfgGwu4eqc2Zj30arKjR7pvfVuhHRCDFICTaZUZSi7S
      PrtN4qtDm3DgCPMSmcNh+Bhcf2G2nP+S86AlvhNx5Fd5RsVgri6PW453G0eYx3PomqdAnWVdhTFJh1Vq2OU5Am0gLAK7VYcUticSGCSkyLstjK0CBvWBjsV+VupVcXjS4w1ThMLeTqsZStlxVE4PDZRJ1KV2vTljhxB+S2cqQxrLFSwZ8fxDHgRa1ksA/ktrbeGLHu4FxI
      OnErN7swTItrceC7ISTR5M8lKq/QvkfxCjI7iiF44hQareKvZFvx+gjGOjX0Uhjvi9Aqsqti5Pqp71vE9D9FDTC34BjLwCsGt4IHcN4le7jgVdD15GJhTZLd0eKnuT8SVBS8hoUpZtI/F6q3cu+JFCxXkOArAckKjhHvs2SV0Wy+zbveqOJ5blMpRj2zSPBOW0zP2U5zaj
      HtEZXC/jYj1X1zZOKDwJs4a81wuLwoaA1ogAg+oW/s93shYPkt2ehx8eEauzsS7zU0sVzXNVcQ9ujj53XqGJLj7ZMHhZPNF0dFWxg0F1lYjDueZcbbhwCbplrW2jxVHVCVEpNjUaFmUANE2xkBDYEYBSM8Qk8WLJ1xSWJQwRzGOwIfMiQSuX2jsBzJcz2m8N4+q+gsoyEM4
      ZKM5RejPl4VyLZ8oIix19eiqu/2t2ap1blsO+IWPnxXG7R7OVKd/ebxA+YXXDljL0zgn9NKO7tCgqAb17vhxSww44noq9xzKukY0vIzlVsqgFSEjOyQwcF7u0xhsK95Aa03XTYLs0LF9zw3KJckYm/Hwck/S9nLYbAOefZaTz3LdwXZkG778l1FDAtYIAATbKSwlyyl1
      o7+P6aMdvbEMDstjBZoT7qUBMMEKHhZm5h4ylIKPgHRATGJpWKXothNCZqPEhUoslWoukKWWKYxyjTTQYg0qgRw+ydA2SxqvCq1yguQJkPKUrXTLigliKGgVNiuaSKxiM2mliFivdJbEYMHULWDFV7AjELOF2r2aY6S0ZTxC5evsWq0xlzcx+6+sVqSRq4YE6JqcomM/
      p4T29fg+WU3U4EtJMO0n3vyjwWts3ZQfDi2LD9ys/Y+Ezvk6D5ruMHRsAAq5JU6TI4IKUcpJetEYHANbeFqBVDERjFkdJ5rJRiyyvTpqzxZUkAmTKuGJd9ij06gKVARWaMqVpUk/3UqwowmrChdlOEcsR205CYZSsnQrEmI7HIrsMqGnCBlgrBepsR2sTE2ChVyXTBYE
      NyCbIY1EQDiEB1Rx0lForFsbdUAQTW4IbMOTqmW0UtsekAzFVLU+KCnugniLJHyvs/h4a0cbnzXXYZkBc9slsAeC6Gi9S9uxLSoba1EYxCY5HYU0hhAEKq9XLku8oYwFUShMsU0WKrmJAMYcymsqQoGE/TeqQmTTTTAgQjU3JiYRyXejEpeohiRZhRgECmjgpDZJCC9i
      PCuGJ42K6FG0kVtIBHMIbyjGhZWUcVZgVAEVhQgYRUK84qqbYqPm+zjYLZoPWLs7RalJQWaNN6OHpKkjBSUHc9eCENEViYMI0L2VEavKgBBiKwwvFS1ADbDKM0IFNHaglnnID0ZyE5A0VamGlLtTFNNCYQKSoVwrRJUBe
      IV9/RecgQIheCncVCgZZoVlClAH//2Q=="></img>
      <img src="https://whitworthpirates.com/images/2021/11/3/CallahanAdam.jpg?width=80"></img>
    </div>
    </>
  );
}

export default About;