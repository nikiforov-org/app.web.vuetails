<template>
  <div class="Card">
    <div class="CardColumn">
      <div class="CardColumnBlock">
        <h2>{{ strDrink }}</h2>
        <p>{{ strCategory }}</p>
        <p>{{ strAlcoholic }}</p>
        <p>{{ strGlass }}</p>
      </div>
      <div class="CardColumnBlock">
        <h3>Instructions:</h3>
        <p>{{ strInstructions }}</p>
      </div>
      <div class="CardColumnBlock">
        <h3>List of ingredients:</h3>
        <table>
          <tbody>
            <tr>
              <td>{{ ingredients[key] }}</td>
              <td>{{ ingredients[measureKey] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="CardColumn">
      <img :src="{{ strDrinkThumb }}" alt="{{ strDrink }}" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .Card {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 0.5rem;
    border-radius: 1rem;
    padding: 1rem;

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    &Column {
      &Block {
        margin: 0 0 2rem;
      }

      &:first-child {
        order: 2;
        flex: 60%;
        padding: 0 0.5rem;

        @media (min-width: 640px) {
          padding: 0 2rem;
        }
      }

      &:last-child {
        order: 1;
        flex: 40%;
      }
    }

    img {
      width: 50%;
      height: auto;
      border-radius: 0.5rem;
      display: block;
      margin: 0 auto 2rem;

      @media (min-width: 640px) {
        width: 100%;
      }
    }

    table {
      border-collapse: collapse;

      tr {
        td {
          padding: 0.5rem;

          &:first-child {
            font-weight: bold;
            background-color: #eee;
          }

          &:last-child {
            white-space: nowrap;
          }

          @media (min-width: 640px) {
            padding: 0.5rem 1rem;
          }
        }
      }
    }

    @media (min-width: 640px) {
      flex-direction: row;

      .CardColumn:first-child {
        order: 1;
      }

      .CardColumn:last-child {
        order: 2;
      }
    }
  }
</style>
