const roleTrigger = async (event: any) => {
  try {
    console.log(JSON.stringify(event));

    return {
      statusCode: 200,
      body: JSON.stringify(event),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: "deu ruim",
    };
  }
};

export const handler = roleTrigger;
