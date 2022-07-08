import prisma from '../lib/prisma.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const create = async (req, res) => {
  const { eventName, eventDate, eventType, eventYear } = req.body;

  const event = await prisma.event.create({
    data: {
      eventName,
      eventDate,
      eventType,
      eventYear,
    },
  });
  res.status(200).json({ event });
};

const getAll = async (req, res) => {
  const event = await prisma.event.findMany();
  res.status(200).json({ event });
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const { eventName, eventDate, eventType, eventYear } = req.body;

  const event = await prisma.event.findUnique({
    where: {
      id: id,
    },
  });
  res.status(200).json({ event });
  if (!event) {
    return next({
      message: `No event found!`,
    });
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { eventName, eventType, eventDate, eventYear } = req.body;

  const event = await prisma.event.update({
    where: {
      id,
    },
    data: {
      eventName,
      eventDate,
      eventType,
      eventYear,
    },
  });
  res.status(200).json({ event });
};

const deleteEvent = async (req, res) => {
  const { id } = req.params;

  await prisma.event.delete({
    where: {
      id,
    },
  });
  res.status(200).json({});
};

export { create, getAll, updateEvent, deleteEvent, getOne };
