const {
  InteractionResponseType,
  InteractionType,
  verifyKey
} = require("discord-interactions");
const getRawBody = require("raw-body");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const acceptableOptions = ["total", "backers", "icon", "name"];

/**
 * @param {VercelRequest} request
 * @param {VercelResponse} response
 */
module.exports = async (request, response) => {
  if (request.method !== "POST")
    return response.status(405).send({
      error:
        "Inproper linear conditional validation and sanitization operational method."
    });
  // Only respond to POST requests
  // Verify the request
  const signature = request.headers["x-signature-ed25519"];
  const timestamp = request.headers["x-signature-timestamp"];
  const rawBody = await getRawBody(request);

  const isValidRequest = verifyKey(
    rawBody,
    signature,
    timestamp,
    process.env.PUBLIC_KEY
  );

  if (!isValidRequest) {
    console.error("Invalid Request");
    return response.status(401).send({ error: "Bad request signature " });
  }

  // Handle the request
  const message = request.body;

  if (message.type === InteractionType.PING) {
    console.log("Handling Ping request");
    return response.send({
      type: InteractionResponseType.PONG
    });
  }

  console.log("m", message);
  if (message.type === InteractionType.APPLICATION_COMMAND) {
    if (
      !message.member ||
      !message.member.permissions ||
      (message.member.permissions & 8) === 0
    )
      return response.status(200).send({
        type: 4,
        data: {
          content: `https://lolpics.com/wp-content/uploads/2021/03/2omevn7k0jp61.jpg`,
          flags: 64
        }
      });

    if (message.data.id === "899061042871668798") {
      // console.log(Object.values(message.data.resolved.users)[0]);
      return response.status(200).send({
        type: 4,
        data: {
          content: `Ok boomer`,
          flags: 64
        }
      });
    }

    if (message.data.name !== "update") {
      console.error("Unknown Command");
      return response.status(400).send({ error: "Unknown Type" });
    }

    if (
      !message.data.options ||
      !Array.isArray(message.data.options) ||
      !message.data.options.find((option) =>
        acceptableOptions.includes(option.name.toLowerCase())
      )
    )
      return response.status(200).send({
        type: 4,
        data: {
          content: `You must include at least one field to update`,
          flags: 64
        }
      });

    if (
      typeof message.data.options.find(
        (option) => !acceptableOptions.includes(option.name.toLowerCase())
      ) === "string"
    )
      return response.status(200).send({
        type: 4,
        data: {
          content: `Discord sent either malformed or unnecessary data (${message.data.options.find(
            (option) => !acceptableOptions.includes(option.name.toLowerCase())
          )})`,
          flags: 64
        }
      });

    const set = message.data.options.reduce(
      (obj, option) => ({
        ...(obj || {}),
        [((option || { name: "" }).name || "").toLowerCase() || ""]:
          (option || { value: undefined }).value || undefined
      }),
      {}
    );

    console.log("set", set);

    if (
      !set ||
      typeof set !== "object" ||
      Array.isArray(set) ||
      Object.keys(set).length === 0
    )
      return response.status(200).send({
        type: 4,
        data: {
          content: `Invalid data unfurling and restructuring`,
          flags: 64
        }
      });

    if (
      typeof Object.keys(set).find(
        (key) => !acceptableOptions.includes(key)
      ) === "string"
    ) {
      return response.status(200).send({
        type: 4,
        data: {
          content: `Discord either sent malformed or unnecessary data (${Object.keys(
            set
          ).find((key) => !acceptableOptions.includes(key))})`,
          flags: 64
        }
      });
    }

    if (Object.keys(set).includes("total")) {
      const total = set["total"];
      if (
        typeof total !== "number" ||
        isNaN(Number(total)) ||
        Number(total) < 0
      )
        return response.status(200).send({
          type: 4,
          data: {
            content: `Total is not numeric`,
            flags: 64
          }
        });

      if (Number(total) % 1 !== 0)
        return response.status(200).send({
          type: 4,
          data: {
            content: `Total is not an integer`,
            flags: 64
          }
        });
    }
    if (Object.keys(set).includes("backers")) {
      const backers = set["backers"];
      if (
        typeof backers !== "number" ||
        isNaN(Number(backers)) ||
        Number(backers) < 0
      )
        return response.status(200).send({
          type: 4,
          data: {
            content: `Backer count is not numeric`,
            flags: 64
          }
        });

      if (Number(backers) % 1 !== 0)
        return response.status(200).send({
          type: 4,
          data: {
            content: `Backer count is not an integer`,
            flags: 64
          }
        });
    }
    if (Object.keys(set).includes("name")) {
      if (typeof set["name"] !== "string")
        return response.status(200).send({
          type: 4,
          data: {
            content: `Server name must be a string`,
            flags: 64
          }
        });

      const name = set["name"].trim().split(/ +/).join(" ");
      if (name.length > 16 || name.length < 1)
        return response.status(200).send({
          type: 4,
          data: {
            content: `Server name must be 16 characters or less`,
            flags: 64
          }
        });
    }

    let serverResponse;

    try {
      serverResponse = await fetch(
        "https://discordcharitybackend.vercel.app/api/set",
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            accept: "application/json"
          },
          body: JSON.stringify({ id: message.guild_id, set })
        }
      ).then((_) => _.json());
    } catch (e) {}

    if (!serverResponse || !serverResponse.status)
      return response.status(200).send({
        type: 4,
        data: {
          content: `Vercel issue\nhttps://www.vercel-status.com/\nhttps://twitter.com/vercel_status`,
          flags: 64
        }
      });

    if (serverResponse.status === 200)
      return response.status(200).send({
        type: 4,
        data: {
          content: `Nothing was changed`,
          flags: 64
        }
      });

    if (serverResponse.status === 201)
      return response.status(200).send({
        type: 4,
        data: {
          content: `:white_check_mark: Success`,
          flags: 64
        }
      });

    if (serverResponse.status === 503)
      return response.status(200).send({
        type: 4,
        data: {
          content: "Mongo issue\nhttps://status.cloud.mongodb.com/",
          flags: 64
        }
      });

    return response.status(200).send({
      type: 4,
      data: {
        content: `Unknown error\n**STATUS:** ${
          serverResponse.status
        }\n\`\`\`json\n${JSON.stringify(serverResponse)}\`\`\``,
        flags: 64
      }
    });
  }

  console.error("Unknown Type");
  response.status(400).send({ error: "Unknown Type" });
};
